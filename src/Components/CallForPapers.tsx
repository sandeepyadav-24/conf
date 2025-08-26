import { Link } from "react-router-dom";

const CallForPapers = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="prose mx-4 my-8">
          <h1 className="heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings font-extrabold text-2xl mb-4 leading-tight">
            Call for Papers
          </h1>

          <p className="mb-5 mt-5">
            Authors are solicited to contribute to the conference by submitting
            articles that illustrate research results- projects, surveying works
            and industrial experiences that describe significant advances in
            computing, communication and Networking. Topics of interest for
            submission include, but are not limited to:
          </p>
          <ul className="list-disc mt-5 mb-5 pl-6 marker:text-zinc-500">
            <li className="mt-2 mb-2">
              Data Analytics, Data Science and Data Mining
            </li>
            <li className="mt-2 mb-2">Machine Learning And Its Application</li>
            <li className="mt-2 mb-2">Big Data Mining and Deep Learning</li>
            <li className="mt-2 mb-2">
              Machine Learning &amp;Deep Learning in Image Processing
            </li>
            <li className="mt-2 mb-2">
              Artificial Intelligence with Internet of Things
            </li>
            <li className="mt-2 mb-2">
              Internet of Things (IOT) with Robotics and Automation
            </li>
            <li className="mt-2 mb-2">
              Artificial Intelligence with Natural Language Processing and Fuzzy
              Logic
            </li>
            <li className="mt-2 mb-2">
              Artificial Neural Networks and Convolution Neural Networks
            </li>
            <li className="mt-2 mb-2">
              Signals and Systems, VLSI Design, Antennas &amp;Embedded Systems
            </li>
            <li className="mt-2 mb-2">
              Computer Networks, Wireless Sensor Networks and Mobile
              Communication
            </li>
            <li className="mt-2 mb-2">
              Network Security, Internet of Things (IoT) Security, Cloud
              Security and Cyber Security
            </li>
            <li className="mt-2 mb-2">
              Parallel and Distributed Systems, Cloud Computing, Green Computing
              &amp;Block Chain Technology
            </li>
            <li className="mt-2 mb-2">
              Computer Systems, Software Engineering &amp;Web Development
            </li>
            <li className="mt-2 mb-2">
              Image / Video Processing &amp;Data Compression
            </li>
            <li className="mt-2 mb-2">
              Control Systems &amp;Automation, IoT with Control Systems
              &amp;Information Systems
            </li>
            <li className="mt-2 mb-2">
              Machine Learning &amp;Deep Learning with Cyber Security
            </li>
            <li className="mt-2 mb-2">
              Researches and Innovations on COVID-19
            </li>
          </ul>

          <p className="mb-5 mt-5">
            Interested authors are invited to submit full papers through
            Microsoft CMT using the below given link. Papers will be accepted
            only by electronic submission through CMT. The authors will need to
            register their email with CMT before submitting their paper, if not
            already registered.
          </p>
          <div>
            <a
              className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 no-underline dark:focus:ring-red-900"
              href="https://cmt3.research.microsoft.com/ICACCN2025"
            >
              <Link to="https://cmt3.research.microsoft.com/ICACCN2025">
                Submit a Paper
              </Link>

              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallForPapers;
