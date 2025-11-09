"use client";
import { createContext, useEffect, useState, ReactNode } from "react";
import { fetchSetting, fetchContactUs } from "@/lib/data";
import { TSetting } from "@/models/Setting";
import { TContactUs } from "@/models/ContactUs";

export const SettingsContext = createContext<{ settings: TSetting }>({
  settings: {} as TSetting,
});

const SettingProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<TSetting>({} as TSetting);

  useEffect(() => {
    const loadData = async () => {
      try {
        const settingData: TSetting = await fetchSetting() as TSetting;
        const contactUsData: TContactUs = await fetchContactUs() as TContactUs;
        setSettings({
          ...settingData,
          address: contactUsData?.address || "",
          location: contactUsData?.location || "",
        });
      } catch (error) {
        console.error("خطا در گرفتن داده‌ها:", error);
        const settingsData = (await fetchSetting()) as TSetting;
        setSettings(settingsData);
      }
    };

    loadData();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingProvider;
