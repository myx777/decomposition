// App.jsx
/**
 * Renders the main App component.
 *
 * @return {JSX.Element} The main App component
 */

import AsideHeader from "./companents/aside-header/AsideHeader";
import ContentList from "./companents/lists/ContentList";
import generalList from "./companents/lists/contents/general/generalList";
import currency from "./companents/lists/contents/currency/currency";
import newsContentList from "./companents/lists/contents/news/contents/newsContentList";
import section from "./companents/lists/contents/news/contents/section/section";
import asideHeadContent from "./companents/aside-header/content/asideHeadContent";
import FormSearch from "./companents/form-search/FormSearch";
import newsMain from "./companents/lists/contents/news-main/newsMain";
import newsMain2 from "./companents/lists/contents/news-main/newsMain2";

function App(): JSX.Element {
  return (
    <>
      <div className="container__page">
        <div className="container">
          <div className="container__list__header">
            <ContentList key="general" list={generalList} />
            <ContentList key="news" list={newsContentList} />
            <ContentList key="currency" list={currency} />
          </div>
          <AsideHeader key="asideHeadContent" {...asideHeadContent} />
        </div>
        <ContentList key="section" list={section} />
        <FormSearch />
        <ContentList key="mainNews" list={newsMain} />
        <ContentList key="mainNews2" list={newsMain2} />
      </div>
    </>
  );
}

export default App;
