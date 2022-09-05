export default function FourOFour() {
  return (
    <section className="flex items-center h-[100vh] p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h1 className="mb-8 font-extrabold text-9xl text-red-700 lg:text-[200px]">
            404
          </h1>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-white">
            But dont worry, you can find plenty of other things to watch on our
            homepage.
          </p>
        </div>
      </div>
    </section>
  );
}
