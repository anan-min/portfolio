import React from "react";
import { BlogCard } from "@/components/Blog/BlogCard";
import { Button } from "@/components/ui/button";
import { Rss } from "lucide-react";

export const Blogs = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Blogs</h1>
      <Button
        className="max-w-max px-4 py-2 inline-flex items-center gap-2 text-justify text-lg my-2"
        variant={"blog_button"}
      >
        <Rss /> Read more At Medium ...
      </Button>
      <div className="grid grid-cols-1 gap-4">
        <BlogCard
          title="Create CNN model with keras and deploy with streamlit on github community"
          description="โดยบทความนี้จะเป็นการสร้าง model CNN หรือ convolutional nueral network โดยใช้ module keras จาก tensorflow ในการพัฒนาและทำการ deploy เป็น website โดยใช้ streamlit กันครับ โดยเราจะเริ่มจากการพัฒนา model บน google colab ด้วย dataset Tiny Image กันครับ"
          tags={["# keras", "# tensorflow", "# streamlit"]}
        />
        <BlogCard
          title="Create Object Detection with Edge Impulse"
          description="เพื่อนๆอาจจะเคยเห็น AI ที่ใช้ CNN ในการทำงานในชีวิตประจำวันอยู่หลายครั้งแล้วแต่ไม่ได้สังเกตเห็นยกตัวอย่างเช่น ระบบขับอัตโนมัติของ Tesla, ระบบตรวจใบหน้าของด่านตรวจคนเข้าเมือง, หรือระบบตรวจจับรถบนทางด่วนสิ่งเหล่านี้ล้วนแล้วแต่จะใช้ CNN หรือ Convolutional Neural Network (CNN)
          "
          tags={["# Edge Impulse", "# Deep learning", "# CNN"]}
        />
      </div>
    </div>
  );
};
