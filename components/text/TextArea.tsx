import { fetchSettings } from "@/actions/settings";

export default async function TextArea({ name, id, value, readOnly, defaultValue, placeholder }: any) {
    const useSettings = await fetchSettings();

    const useDarkMode = useSettings.useDarkMode;

    return (
        <textarea
            id={name}
            name={id}
            rows={3}
            readOnly={readOnly}
            className={`${useDarkMode ? 'dark' : ''} block h-full field-sizing-content resize-none w-full rounded-md bg-white px-3 py-1.5 text-base outline outline-1 -outline-offset-1 sm:text-sm/6`}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
        />
    );
};
