import { createSignal, For, Show } from "solid-js";
import MainLayout from "../components/layouts/MainLayout";
import PostCard from "../components/posts/PostCard";

export default function HomeFeeds() {
  const [showLikeDialog, setShowLikeDialog] = createSignal(false);
  return (
    <MainLayout>
      {/* left section */}
      <div
        className={`h-screen fixed top-14 md:w-1/4 xl:w-1/5 hidden py-4 md:block left-0 bg-gray-100  px-2`}
      ></div>

      {/* middle section */}
      <div className="w-full md:w-2/4 xl:w-3/5 mx-auto">
        {/* posts */}
        <ul className="grid grid-cols-1 gap-4">
          <For each={[...Array(10).keys()]}>
            {(post) => (
              <li>
                <PostCard />
              </li>
            )}
          </For>
        </ul>
      </div>

      {/* right section  */}
      <div
        className={`h-screen fixed top-14 md:w-1/4 xl:w-1/5 hidden py-4 md:block right-0 bg-gray-100 px-2`}
      ></div>
    </MainLayout>
  );
}