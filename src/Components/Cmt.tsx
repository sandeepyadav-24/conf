const CmtAcknowledgement = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-12">

      {/* Message Box */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg">
            The Microsoft CMT service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CmtAcknowledgement;
