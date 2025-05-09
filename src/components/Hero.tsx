
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Học Trực Tuyến Cùng{" "}
              <span className="text-primary">Digital Education</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Nền tảng học trực tuyến hàng đầu với các khóa học chất lượng cao
              từ các giảng viên hàng đầu
            </p>
            <Button className="text-lg px-8 py-6 bg-primary hover:bg-blue-600 text-white">
              Đăng ký học thử
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="https://source.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Học trực tuyến"
              className="rounded-lg shadow-xl max-w-full h-auto"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
