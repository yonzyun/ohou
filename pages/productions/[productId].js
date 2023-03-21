import React from 'react';
import { useRouter } from 'next/router';

const ProductPage = () => {
    const router = useRouter();
    console.log("router.pathname", router.pathname);
    console.log("router.query", router.query);

    return(
        <div>
            동적 페이지 테스트<br />
            상품 아이디: {router.query.productId}
        </div>
    )
}

export default ProductPage;