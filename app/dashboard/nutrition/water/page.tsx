import { fetchWaterIntakeToday } from '@/actions/nutrition_water';
import WaterForm from '@/components/forms/update/WaterForm';

export default async function Page() {

    const useWaterIntake = await fetchWaterIntakeToday();

    return (
        <div>
            <WaterForm data={JSON.parse(JSON.stringify(useWaterIntake))} />
        </div>
    )
}
