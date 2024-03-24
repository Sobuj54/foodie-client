import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cuisineList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import CuisineCheckbox from "./CuisineCheckbox";

const CuisinesSection = () => {
    const {control} = useFormContext();
    return (
        <div className="space-y-2">
            <div>
                <h2 className="font-bold text-2xl">Cuisines</h2>
                <FormDescription>
                    Select the cuisines that your restaurant serves.
                </FormDescription>
            </div>
            
            <FormField control={control} name="cuisines" render={({field})=>(
                <FormItem>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
                        {cuisineList.map((cuisineItem, index)=>(
                            <CuisineCheckbox key={index} cuisine={cuisineItem} field={field}/>
                        ))}
                    </div>
                    <FormMessage/>   
                </FormItem>
            )}/>
        </div>
    );
};

export default CuisinesSection;