import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const formSchema = z.object({
  email: z.string().optional(), //this is a readonly field
  name: z
    .string()
    .min(1, "Name is required.")
    .max(20, "Name must be under 20 character."),
  addressLine1: z
    .string()
    .min(1, "AddressLine1 is required.")
    .max(20, "Address should not exceed 20 character."),
  city: z
    .string()
    .min(1, "City is required.")
    .max(15, "City should not exceed 15 character."),
  country: z
    .string()
    .min(1, "Country is required.")
    .max(10, "Country should not exceed 10 character."),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

const UserProfileForm = ({ onSubmit, isLoading }: Props) => {
  const {user} = useAuth0();
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 bg-gray-100 rounded-lg md:p-10">
        <div>
          <h2 className="text-2xl font-bold">User Profile Form</h2>
          <FormDescription>
            View and change your profile information here.
          </FormDescription>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled className="bg-white" defaultValue={user?.email} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white"/>
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>AddressLine1</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white"/>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white"/>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white"/>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit" className="bg-orange-500">
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;