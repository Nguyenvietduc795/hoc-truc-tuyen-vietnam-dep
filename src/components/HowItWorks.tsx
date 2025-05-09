
import { User, Play } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Cách Thức Học Trực Tuyến
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Mô hình học tập 100% trực tuyến, linh hoạt và hiệu quả
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Lớp học trực tuyến</h3>
            <p className="text-gray-600">
              Học thông qua lớp học Zoom với giảng viên trực tiếp, tương tác thời gian thực
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Bài tập thực hành</h3>
            <p className="text-gray-600">
              Làm bài tập và dự án thực tế để áp dụng kiến thức vào thực tiễn
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Chứng chỉ PDF</h3>
            <p className="text-gray-600">
              Nhận chứng chỉ kỹ thuật số sau khi hoàn thành khóa học, có thể tải về dưới dạng PDF
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tất cả các khóa học đều được thiết kế giúp học viên học mọi lúc, mọi nơi với nội dung chất lượng cao và hỗ trợ trực tuyến 24/7.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
