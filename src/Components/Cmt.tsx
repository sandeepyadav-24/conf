const CmtAcknowledgement = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          CMT Acknowledgement
        </h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg">
            The Microsoft CMT services was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </p>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              We thank Microsoft for their generous support in making this
              conference possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmtAcknowledgement;
