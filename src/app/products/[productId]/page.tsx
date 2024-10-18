import React from "react";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div>
      <h1>Product details of {params.productId}</h1>
    </div>
  );
}
