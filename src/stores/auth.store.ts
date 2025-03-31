import {http} from "@configs";
import {Keys} from "@constants";
import AuthService from "@services/auth.service";
import {
  IAuthenticationRequest,
  IAuthenticationResponse
} from "@services/dtos/auth";
import StorageUtils from "@utils/stores.util";
import {Alert} from "react-native";
import {create} from "zustand";

interface AuthStore {
  submitting: boolean;
  authenticated: boolean;
  authenticating: boolean;
  user: User | null;
  actions: {
    submitSignIn: (params: IAuthenticationRequest) => void;
    authorizeUser: () => void;
    logout: () => void;
  };
}

function setAuthRequest(accessToken: string) {
  http.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

export const useAuthStore = create<AuthStore>(set => ({
  submitting: false,
  authenticated: false,
  authenticating: false,
  user: null,
  actions: {
    async submitSignIn(params) {
      set({
        submitting: true
      });
      const response = await AuthService.authenticate(params);
      if (response?.data) {
        set({
          user: response.data.user,
          authenticated: true,
          submitting: false
        });
        setAuthRequest(response.data.accessToken);
        await StorageUtils.setSensitiveItem(
          Keys.user_credentials,
          JSON.stringify(response.data)
        );
      } else {
        Alert.alert("Ops!", "Invalid email or password. Please check again!");
        set({
          submitting: false
        });
      }
    },
    async authorizeUser() {
      set({
        authenticating: true
      });
      const storagedUser = await StorageUtils.getSensitiveItem(
        Keys.user_credentials
      );
      if (storagedUser) {
        const parsedStoragedUser: IAuthenticationResponse =
          JSON.parse(storagedUser);
        setAuthRequest(parsedStoragedUser.accessToken);
        set({
          authenticated: true,
          authenticating: false,
          user: parsedStoragedUser.user
        });
      } else {
        set({
          authenticating: false
        });
      }
    },
    logout() {
      set({
        authenticated: false,
        user: null
      });
      StorageUtils.resetSensitiveItem(Keys.user_credentials);
    }
  }
}));

export const useAuthStoreActions = () => useAuthStore(state => state.actions);
