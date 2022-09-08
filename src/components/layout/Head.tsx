import Head from 'next/head';

interface Meta {
    url?: string,
    title?: string,
    description?: string,
    image?: string,
    createdAt?: string | Date,
    updatedAt?: string | Date,
    icon?: string
    keywords?:string
}

interface Tag {
    name?: string,
    content?: string
}

const socialTags = (props: Meta) => {
    const {
        url,
        title,
        description,
        image,
        createdAt,
        updatedAt,
    } = props
    return [
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@Nami' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:creator', content: '@Nami' },
        { name: 'twitter:image:src', content: image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'og:title', content: title },
        { name: 'og:image', content: image },
        { name: 'og:site_name', content: 'Nami Exchange' },
        { name: 'og:description', content: description },
        { name: 'og:published_time', content: createdAt },
        { name: 'og:modified_time', content: updatedAt },
    ];
};

const Meta = (props: Meta) => {
    const {
        title = 'title',
        description,
        keywords,
        image,
        icon = '/ic_insurance.png'
    } = props;
    return <Head>
        <title>{title}</title>
        <meta key="name" itemProp="name" content={title} />
        <meta key="description" name="description" content={description} />
        <meta key="image" itemProp="image" content={image} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="manifest" href="/site.webmanifest" key="site-manifest" /> */}
        <link rel="icon" type="image/x-icon" href={icon} />
        {keywords && <meta key="keywords" name="keywords" content={keywords} />}
        {socialTags(props).map(({ name, content } :any) => {
            return <meta key={name} name={name} content={content} />;
        })}
    </Head>
};

export default Meta
