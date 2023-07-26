// route made publis from here

/** 
 * hierarchy  
 * <layout>
 * <Template>
 * <error> error boundary
 * <loading> inside suspense boundry
 * not-found error boundary
 * page
 * ....
 * 
 * */ 
// import Layout from './layout';
// import Template from './template';
// import Error from './error';
// import Loading from './loading';
// import NotFound from './not-found';
// import { Suspense } from 'react';
// import { ErrorBoundary } from 'react-error-boundary';
// export default function MyPage() {
//     return (
//         <Layout>
//             <Template>
//                 <ErrorBoundary fallback={<Error/>}>
//                     <Suspense fallback={<Loading/>}>
//                         <ErrorBoundary fallback={<NotFound/>}>
//                             <div>Page shit here</div>
//                         </ErrorBoundary>
//                     </Suspense>
//                 </ErrorBoundary>
//             </Template>
//         </Layout>
//     )
// }

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Practice codes',
  description: 'Meta description change test'
}

export default function Page() {
    return <h1>Hello, Next.js!</h1>
}