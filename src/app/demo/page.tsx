import CourseCard from "@/components/ui/CourseCard";
import React from "react";

const page = () => {
  return (
    <CourseCard
      image="https://plus.unsplash.com/premium_photo-1752521132303-15829446682e?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Sample Course"
      rating={4.5}
      reviews={"120"}
      oldPrice={199.99}
      price={99.99}
      // instructor="John Doe"
      enrollLink=""
    />
  );
};

export default page;
