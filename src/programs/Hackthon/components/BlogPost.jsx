import BlogPostCard from './BlogPostCard';
import Card from '../../../components/card';
import EditBlogPost from '../addingSection/EditBlogPost';

const BlogPost = () => {

    const contentItems = [
        {
            content1: 'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy,',
            content2: " laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
            buttonText: "Button Name",
            buttonLink: "Button Link"
        },
        {
            content1: 'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy,',
            content2: " laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
            buttonText: "Button Name",
            buttonLink: "Button Link"
        },
        {
            content1: 'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy,',
            content2: " laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
            buttonText: "Button Name",
            buttonLink: "Button Link"
        },
    ];

    return (
        <div>
            <Card extra={` h-full sm:overflow-auto my-5 p-5 mx-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className="text-xl font-bold text-navy-700">
                        Blog Post (prize bonus)
                    </div>
                    <div className='flex gap-3'>
                        <EditBlogPost/>
                    </div>
                </header>
                <div
                    className='grid grid-cols-3 gap-4' >
                    {contentItems.map((item, index) => (
                        <BlogPostCard
                            key={index}
                            content1={item.content1}
                            content2={item.content2}
                            buttonText={item.buttonText}
                            buttonLink={item.buttonLink}
                        />
                    ))}
                </div>
            </Card>
        </div>

    )
}

export default BlogPost;
