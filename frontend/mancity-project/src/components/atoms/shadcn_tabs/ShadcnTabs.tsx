import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PropsType {
  Tab1: string;
  Tab2: string;
  onChange: () => void;
}

const ShadcnTabs = (props: PropsType) => {
  const { Tab1, Tab2, onChange } = props;
  return (
    <Tabs defaultValue="tab1" onValueChange={onChange} className="w-80">
      <TabsList>
        <TabsTrigger value="tab1">{Tab1}</TabsTrigger>
        <TabsTrigger value="tab2">{Tab2}</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ShadcnTabs;
