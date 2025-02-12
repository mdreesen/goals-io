export async function findBook({ data }: any) {
    const useData = await data;
    const hereDocs = useData.map((item: any) => {
        return item.cover_i;
    });

    return hereDocs[0];
};