import React from 'react';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

const ShareVideo = ({ videoLink }) => {
    return (
        <div className="flex justify-center">
            <FacebookShareButton url={videoLink}>
                <FacebookIcon className="rounded-3xl mr-4"></FacebookIcon>
            </FacebookShareButton>

            <WhatsappShareButton url={videoLink}>
                <WhatsappIcon className="rounded-3xl mr-4"></WhatsappIcon>
            </WhatsappShareButton>

            <TwitterShareButton url={videoLink}>
                {" "}
                <TwitterIcon className="rounded-3xl mr-4"></TwitterIcon>
            </TwitterShareButton>

            <LinkedinShareButton url={videoLink}>
                <LinkedinIcon className="rounded-3xl mr-4"></LinkedinIcon>
            </LinkedinShareButton>

            <RedditShareButton url={videoLink}>
                <RedditIcon className="rounded-3xl"></RedditIcon>
            </RedditShareButton>
        </div>
    );
};

export default ShareVideo;