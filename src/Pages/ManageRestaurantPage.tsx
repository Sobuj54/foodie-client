import { useCreateMyRestaurant } from "@/api/RestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isPending } = useCreateMyRestaurant();

  return <ManageRestaurantForm onSave={createRestaurant} isLoading={isPending} />;
};

export default ManageRestaurantPage;
