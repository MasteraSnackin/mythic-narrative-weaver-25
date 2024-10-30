import { motion } from "framer-motion";
import { FANTASY_IMAGE, SCIFI_IMAGE, ADVENTURE_GENRE_IMAGE, MYSTERY_IMAGE } from "@/utils/images";
import { Card, CardContent } from "@/components/ui/card";

export const ImageGallery = () => {
  const images = [
    { src: FANTASY_IMAGE, title: "Fantasy" },
    { src: SCIFI_IMAGE, title: "Science Fiction" },
    { src: ADVENTURE_GENRE_IMAGE, title: "Adventure" },
    { src: MYSTERY_IMAGE, title: "Mystery" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 to-white dark:from-purple-900/20 dark:to-black/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
            Explore Our Story Worlds
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Immerse yourself in diverse genres and adventures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <h3 className="text-white text-xl font-bold p-6">{image.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};