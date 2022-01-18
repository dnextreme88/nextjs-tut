// our-domain.com/news/{newsId}
import { useRouter } from 'next/router'

function DetailPage() {
    const router = useRouter()

    // Extract query data from URL
    const newsId = router.query.newsId

    return <h1>The Detail Page</h1>
}

export default DetailPage;