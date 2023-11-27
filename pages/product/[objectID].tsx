import algoliasearch from 'algoliasearch'
import type { GetServerSidePropsContext } from 'next'
import { useEffect, useState } from 'react'
import { Hits, Configure } from 'react-instantsearch-dom'

import { Container } from '@/components/container/container'
import { ProductCardHitShowcase } from '@/components/product-card/product-card-hit'
import { ProductDetailHit } from '@/components/product-detail/product-detail-hit'
import { ProductsShowcase } from '@/components/products-showcase/products-showcase'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  getServerSidePropsPage,
  SearchPageLayout,
} from '@/layouts/search-page-layout'

export type ProductPageProps = SearchPageLayoutProps & {
  objectID: string
  // test: string
}

export default function Product({ objectID, ...props }: ProductPageProps) {
  const [posts, setPosts] = useState(String)

  function fetchPosts() {
    const client = algoliasearch(
      'E142ZWDVM4',
      'cef8bca32bcdcb1a169b2ec00e1f8429'
    )
    const index = client.initIndex('pwa_ecom_ui_template_products')
    index
      .getObject(objectID, {
        attributesToRetrieve: ['gender', 'brand', 'product_type'],
      })
      .then((object) => {
        const { brand, gender } = object
        return setPosts(`${String(brand)} ${String(gender)}`)
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [objectID])

  return (
    <>
      <SearchPageLayout {...props}>
        <Container className="mt-12 xl:mt-20 overflow-x-hidden overflow-y-hidden">
          <Configure filters={`objectID:${objectID?.toUpperCase()}`} />
          <Hits hitComponent={ProductDetailHit} />
          {/* <ProductsShowcase
            title="Recomendado Para ti"
            indexId="spring-summer-2021"
            ruleContexts={['home-spring-summer-2021']}
            className="laptop:bg-gray-50"
            hitComponent={ProductCardHitShowcase}
          /> */}
        </Container>
      </SearchPageLayout>
      <SearchPageLayout {...props}>
        <div>
          <ProductsShowcase
            // indexId="recommended"
            title="Recomendado para ti"
            query={posts}
            ruleContexts={posts}
            hitComponent={ProductCardHitShowcase}
          />
        </div>
      </SearchPageLayout>
    </>
  )
}

export const getServerSideProps = (context: GetServerSidePropsContext) =>
  getServerSidePropsPage(Product, context, {
    props: {
      objectID: context.params?.objectID,
    },
  })
