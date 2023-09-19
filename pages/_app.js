import CustomLayout from "@/components/layout/customLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <CustomLayout>{page}</CustomLayout>);

  return getLayout(<Component {...pageProps} />);
}
