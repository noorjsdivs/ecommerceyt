import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Fragment } from "react";
import { FaStar } from "react-icons/fa6";

const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eligendi praesentium fugit, dolore aut voluptate corporis quas! Quas dolore tempore deleniti aut facilis recusandae maiores, tenetur nesciunt placeat cupiditate molestiae excepturi atque, dolor corrupti aperiam necessitatibus labore debitis nisi nobis id obcaecati repellendus quos velit. Iste repudiandae dicta similique.</p>
        `,
      date: "July 16, 2021",
      datetime: "2021-07-16",
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 2,
      rating: 5,
      content: `
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eligendi praesentium fugit, dolore aut voluptate corporis quas! Quas dolore tempore deleniti aut facilis recusandae maiores, tenetur nesciunt placeat cupiditate molestiae excepturi atque, dolor corrupti aperiam necessitatibus labore debitis nisi nobis id obcaecati repellendus quos velit. Iste repudiandae dicta similique..</p>
        `,
      date: "July 12, 2021",
      datetime: "2021-07-12",
      author: "Hector Gibbons",
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
  ],
};

const faqs = [
  {
    question: "What format are these icons?",
    answer:
      "The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.",
  },
  {
    question: "Can I use the icons at different sizes?",
    answer:
      "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
  },
];

const license = {
  href: "#",
  summary:
    "For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.",
  content: `
      <h4>Overview</h4>
      
      <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>
      
      <ul role="list">
      <li>You\'re allowed to use the icons in unlimited projects.</li>
      <li>Attribution is not required to use the icons.</li>
      </ul>
      
      <h4>What you can do with it</h4>
      
      <ul role="list">
      <li>Use them freely in your personal and professional work.</li>
      <li>Make them your own. Change the colors to suit your project or brand.</li>
      </ul>
      
      <h4>What you can\'t do with it</h4>
      
      <ul role="list">
      <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
      <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
      </ul>
    `,
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const ProductFeatures = () => {
  return (
    <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
      <TabGroup>
        <div className="border-b border-gray-200">
          <TabList className="-mb-px flex space-x-8">
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                  "whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                )
              }
            >
              Customer Reviews
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                  "whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                )
              }
            >
              FAQ
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                  "whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                )
              }
            >
              License
            </Tab>
          </TabList>
        </div>
        <TabPanels as={Fragment}>
          <TabPanel className="-mb-10">
            <h3 className="sr-only">Customer Reviews</h3>

            {reviews.featured.map((review, reviewIdx) => (
              <div
                key={review.id}
                className="flex space-x-4 text-sm text-gray-500"
              >
                <div className="flex-none py-5">
                  <img
                    src={review.avatarSrc}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                </div>
                <div
                  className={classNames(
                    reviewIdx === 0 ? "" : "border-t border-gray-200",
                    "py-5"
                  )}
                >
                  <h3 className="font-medium text-gray-900">{review.author}</h3>
                  <p>
                    <time dateTime={review.datetime}>{review.date}</time>
                  </p>

                  <div className="mt-2 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <FaStar
                        key={rating}
                        className={classNames(
                          review.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <div
                    className="prose prose-sm mt-2 max-w-none text-gray-500"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              </div>
            ))}
          </TabPanel>

          <TabPanel className="text-sm text-gray-500">
            <h3 className="sr-only">Frequently Asked Questions</h3>

            <dl>
              {faqs.map((faq) => (
                <Fragment key={faq.question}>
                  <dt className="mt-5 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="prose prose-sm mt-2 max-w-none text-gray-500">
                    <p>{faq.answer}</p>
                  </dd>
                </Fragment>
              ))}
            </dl>
          </TabPanel>

          <TabPanel className="pt-5">
            <h3 className="sr-only">License</h3>

            <div
              className="prose prose-sm max-w-none text-gray-500"
              dangerouslySetInnerHTML={{ __html: license.content }}
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default ProductFeatures;
