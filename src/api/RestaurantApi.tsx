import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const res = await fetch(
      `${API_BASE_URL}/api/v1/restaurant/create-restaurant`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: restaurantFormData,
      }
    );

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

export const useGetMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantRequest = async (): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const res = await fetch(`${API_BASE_URL}/api/v1/restaurant`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to get restaurant.");
    }
    return res.json();
  };

  const { data: restaurant, isLoading } = useQuery({
    queryKey: ["myRestaurant"],
    queryFn: getMyRestaurantRequest,
  });

  return { restaurant, isLoading };
};

export const useUpdateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const res = await fetch(`${API_BASE_URL}/api/v1/restaurant`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    if (!res.ok) {
      throw new Error("Failed to update restaurant");
    }
    return res.json();
  };

  const {
    mutate: updateRestaurant,
    isPending,
    isSuccess,
    error,
  } = useMutation({ mutationFn: updateRestaurantRequest });

  if (isSuccess) {
    toast.success("Restaurant updated successfully.");
  }
  if (error) {
    toast.error(error.toString());
  }

  return { updateRestaurant, isPending };
};
