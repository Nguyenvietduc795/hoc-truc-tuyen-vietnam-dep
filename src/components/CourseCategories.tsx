
import { Button } from "@/components/ui/button";
import { BookOpen, Book } from "lucide-react";

const CourseCategories = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Khám Phá Các Khóa Học
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category 1 */}
          <div className="bg-blue-50 rounded-xl p-6 transition-transform hover:scale-105 shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Khóa học lập trình & CNTT
              </h3>
              <p className="text-gray-700 mb-5">
                Học lập trình, phát triển web, ứng dụng di động, AI và nhiều kỹ
                năng công nghệ khác
              </p>
              <Button className="bg-primary hover:bg-blue-600 text-white">
                Xem khóa học
              </Button>
            </div>
          </div>

          {/* Category 2 */}
          <div className="bg-yellow-50 rounded-xl p-6 transition-transform hover:scale-105 shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="bg-secondary h-16 w-16 rounded-full flex items-center justify-center mb-4">
                <Book className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Khóa học tiếng Anh & chứng chỉ
              </h3>
              <p className="text-gray-700 mb-5">
                Học tiếng Anh giao tiếp, IELTS, TOEIC và các chứng chỉ quốc tế
                khác
              </p>
              <Button className="bg-secondary hover:bg-yellow-400 text-gray-800">
                Xem khóa học
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
