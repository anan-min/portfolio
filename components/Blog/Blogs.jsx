import React from "react";
import { BlogCard } from "@/components/Blog/BlogCard";
import { Button } from "@/components/ui/button";
import { Rss } from "lucide-react";

export const Blogs = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <a
          href="https://medium.com/@nut999anan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="px-4 py-2 inline-flex items-center gap-2 text-justify text-base  my-2"
            variant={"blog_button"}
          >
            <Rss /> Medium
          </Button>
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <BlogCard
          title="Create CNN model with keras and deploy with streamlit on github community"
          description="โดยบทความนี้จะเป็นการสร้าง model CNN หรือ convolutional nueral network โดยใช้ module keras จาก tensorflow ในการพัฒนาและทำการ deploy เป็น website โดยใช้ streamlit กันครับ โดยเราจะเริ่มจากการพัฒนา model บน google colab ด้วย dataset Tiny Image กันครับ"
          tags={["# keras", "# tensorflow", "# streamlit"]}
          link="https://medium.com/@nut999anan/cnn-model-using-keras-and-deploy-on-streamlit-github-community-8095c2d03f70"
        />
        <BlogCard
          title="Create Object Detection with Edge Impulse"
          description="เพื่อนๆอาจจะเคยเห็น AI ที่ใช้ CNN ในการทำงานในชีวิตประจำวันอยู่หลายครั้งแล้วแต่ไม่ได้สังเกตเห็นยกตัวอย่างเช่น ระบบขับอัตโนมัติของ Tesla, ระบบตรวจใบหน้าของด่านตรวจคนเข้าเมือง, หรือระบบตรวจจับรถบนทางด่วนสิ่งเหล่านี้ล้วนแล้วแต่จะใช้ CNN หรือ Convolutional Neural Network (CNN)
          "
          tags={["# Edge Impulse", "# Deep learning", "# CNN"]}
          link="https://medium.com/@nut999anan/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-object-detection-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-edge-impulse-f49d2ef4da3b"
        />
      </div>
    </div>
  );
};
