import { Editor, FolderStructure, Footer, Toolbar } from '../../components';
import { HomepageWrapper } from './Homepage.styled';
export function Homepage() {
  return (
    <HomepageWrapper>
      <section>
        <Toolbar />
        <FolderStructure />
        <Editor />
      </section>
      <Footer />
    </HomepageWrapper>
  );
}
