import React from "react";

export const generateMetadata = ({ params }) => {
  const { id } = params;
  return {
    title: `san-pham-${id}`,
    description: `Sản phẩm chất lượng hàng ${id}!`,
  };
};
const product = ({ params }) => {
  const { id } = params;
  return (
    <a
      href="#"
      className="group relative block bg-black w-1/4 left-1/2"
      style={{ translate: "-50%" }}
    >
      <img
        alt="Developer"
        src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          Developer
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">
          Sản phẩm {id}
        </p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">Hàng tuyển nội địa Trái Đất</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default product;
