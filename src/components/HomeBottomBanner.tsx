import React, { useEffect, useState } from 'react';

const HomeBottomBanner = () => {
  const [first, setFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirst((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex justify-center mt-20 items-center">
      <div className="backdrop-blur-sm sticky bg-white/20 border border-neutral-500 h-20 w-96 rounded-xl">
        <div className="flex relative items-center">
          {first ? (
            <img
              className={`absolute bottom-[-80px] transition-transform duration-500 ease-in-out transform ${first ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              width={200}
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7bced49-73a3-43c1-b3ce-fe419a596a72/dha89lw-9485745d-1a8d-4a6f-b338-5685f50a8dd5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3YmNlZDQ5LTczYTMtNDNjMS1iM2NlLWZlNDE5YTU5NmE3MlwvZGhhODlsdy05NDg1NzQ1ZC0xYThkLTRhNmYtYjMzOC01Njg1ZjUwYThkZDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NNgnkLL04vUeylQ1IxJwuEMjXmFvLYyfJX3EOGE69Rc"
              alt=""
            />
          ) : (
            <img
              className={`absolute bottom-[-80px] transition-transform duration-500 ease-in-out transform ${first ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"}`}
              width={120}
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/edba4d1d-7434-4658-8c1a-a1f86d43f5cf/dgn66fj-09194d35-9af5-42ca-a004-2191c9a1a5c9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkYmE0ZDFkLTc0MzQtNDY1OC04YzFhLWExZjg2ZDQzZjVjZlwvZGduNjZmai0wOTE5NGQzNS05YWY1LTQyY2EtYTAwNC0yMTkxYzlhMWE1YzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ckCxxMIN7DIvZT9lH16SPXCchaAxhxmslXFJE8joHIs"
              alt=""
            />
          )}
          <h4 className="absolute text-2xl right-5 top-5 font-bold text-white/60">
            <span className="text-purple-200/60">Anime</span> Truce
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HomeBottomBanner;
