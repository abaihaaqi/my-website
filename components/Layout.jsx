import Banner from "./Banner";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout({ children, home, bannerContent, md }) {
  return (
    <>
      <ScrollToTop />
      <Banner home={home} content={bannerContent} />
      <main>
        {!md ? children : (
          <article className="container max-w-2xl bg-primary md:rounded-lg py-3 px-4 mb-4">
            {children}
          </article>
        )}
      </main>
      <Footer />
    </>
  )
}
