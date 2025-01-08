import { fetchWaterIntakeToday } from '@/actions/nutrition_water';
import WaterForm from '@/components/forms/update/WaterForm';
import { parse } from '@/lib/formatters';

export default async function Page() {

    const useWaterIntake = await fetchWaterIntakeToday();

    return (
        <div>
            <WaterForm data={parse(useWaterIntake)} />
        </div>
    )
}
