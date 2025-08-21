const CmtAcknowledgement = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-12">

      {/* Message Box */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg">
           The peer-review process for this conference was managed using Microsoft’s Conference Management Toolkit (CMT). Microsoft generously provided this service free of charge, covering all associated costs, including those for Azure cloud infrastructure, software development, and technical support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CmtAcknowledgement;
