import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

interface ITab {
  id: number;
  title: string;
  content: string;
}

const MyTabs: React.FC = () => {
  const tabsData: ITab[] = [
    { id: 1, title: 'Tab 1', content: 'This is the content for Tab 1: Dummy Content is a Jomla! system plugin (and editor button) that helps you automatically place random dummy text into your Articles - or in any other content item that has an editor, such as Custom HTML Modules, Category descriptions, 3rd party content, etc.' },

    { id: 2, title: 'Tab 2', content: ' This is the Content for Tab 2 : Dummy Content is a Joomla! system plugin (and editor button) that helps you automatically place random dummy text into your Articles - or in any other content item that has an editor, such as Custom HTML Modules, Category descriptions, 3rd party content, etc.' },
 
  ];

  return (
    <Tabs>
      <TabList>
        {tabsData.map(tab => (
          <Tab key={tab.id}>{tab.title}</Tab>
        ))}
      </TabList>

      {tabsData.map(tab => (
        <TabPanel key={tab.id}>
          <h2>{tab.content}</h2>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default MyTabs;
