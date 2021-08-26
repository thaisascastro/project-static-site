import { Content } from "./layout/content/content.component";
import { Footer } from "./layout/footeer/footer.component";
import { Header } from "./layout/header/header.component";

export default function Index() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
