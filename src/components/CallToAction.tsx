
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="py-16 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Bắt đầu hành trình học tập của bạn ngay hôm nay
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Đăng ký học thử miễn phí và trải nghiệm phương pháp học trực tuyến hiệu quả
        </p>
        <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
          Đăng ký học thử
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
