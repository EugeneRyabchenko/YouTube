 export class Video{
    public id: number
    public title: string
    public description: string
    public thumbnailURL: string
    public link: string

    public static fromJson(json: any): Video{
        const v: Video = {
            id: json.video_id,
            title: json.video_name,
            description: json.video_description,
            thumbnailURL: json.thumbnail_URL,
            link: json.video_URL
        }
        return v
    }

    public static toJson(video: Video): any{
        const a: any = {
            video_id: video.id,
            video_name: video.title,
            video_description: video.description,
            thumbnail_URL: video.thumbnailURL,
            video_URL: video.link,
            publish_date: new Date()
        }
        return a
    }

}

