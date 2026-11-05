import React from "react";
import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialSpotify,
} from "react-icons/sl";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import Song from "../assets/audio/SadPlaces.wav";
import albumArt from "../assets/images/AlbumArt.jpg";

export const Music = () => {
  return (
    <div className="h-screen">
      <div className="pt-4 pl-4">
        <Link className="text-blue-600 underline" to="/">
          Documents
        </Link>{" "}
        {">"} Sad Places - MASTER 24 48.wav
      </div>
      <div className="flex flex-row justify-center pt-40 items-center">
        <div className="flex-col">
          <div className="w-72 rounded-2xl bg-white p-4 shadow-lg">
            {/* Square art */}
            <img
              src={albumArt}
              alt="Album art"
              className="aspect-square w-full rounded-xl object-cover shadow-md"
            />

            {/* Track info */}
            <div className="mt-4 mb-3 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                Sad Places & Smiling Faces
              </h2>
              <p className="text-sm text-gray-500">
                Father, Help Me
              </p>
            </div>

            {/* Audio player */}
            <ReactAudioPlayer
              src={Song}
              controls
              className="w-full rounded-full [&::-webkit-media-controls-panel]:bg-blue-100"
            />
          </div>{" "}
        </div>
      </div>
      <div className="fixed bottom-4 left-0 right-0">
        <div className="object-none object-bottom flex justify-center gap-4 text-gray-500">
          <div className="hover:text-black">
            <a
              href="https://www.instagram.com/fatherhelpmeband/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <SlSocialInstagram />
            </a>
          </div>
          <div className="hover:text-black">
            {" "}
            <a
              href="https://www.facebook.com/FatherHelpMeBand"
              rel="noreferrer"
              target="_blank"
            >
              <SlSocialFacebook />
            </a>
          </div>
          <div className="hover:text-black">
            <a
              href="https://open.spotify.com/artist/5hLg85exsPamjHRb12tHPW"
              rel="noreferrer"
              target="_blank"
            >
              <SlSocialSpotify />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
