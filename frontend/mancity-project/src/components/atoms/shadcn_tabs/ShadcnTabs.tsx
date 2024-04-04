import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PropsType {
  Tab1: string;
  Tab2: string;
  defaultTab: string;
  onChange: () => void;
}

const ShadcnTabs = (props: PropsType) => {
  const { Tab1, Tab2, defaultTab, onChange } = props;
  return (
    <Tabs defaultValue={defaultTab} onValueChange={onChange} className="flex-grow">
      <TabsList>
        <TabsTrigger value="tab1">{Tab1}</TabsTrigger>
        <TabsTrigger value="tab2">{Tab2}</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ShadcnTabs;
