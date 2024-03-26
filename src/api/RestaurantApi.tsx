import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const res = await fetch(`${API_BASE_URL}/api/v1/restaurant/create-restaurant`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    console.log("res :", res);
    if (!res.ok) {
      throw new Error("Failed to create restaurant.");
    }

    return res.json();
  };

  const {
    mutate: createRestaurant,
    isPending,
    isSuccess,
    error,
  } = useMutation({ mutationFn: createMyRestaurantRequest });

  if (isSuccess) {
    toast.success("Restaurant created.");
  }

  if (error) {
    toast.error(error.toString());
  }

  return { createRestaurant, isPending };
};