import { useCreateMyRestaurant, useGetMyRestaurant } from "@/api/RestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant,  isPending } = useCreateMyRestaurant();
  const {restaurant, isLoading} = useGetMyRestaurant();

  return <ManageRestaurantForm restaurant={restaurant} onSave={createRestaurant} isLoading={isPending || isLoading} />;
};

export default ManageRestaurantPage;
