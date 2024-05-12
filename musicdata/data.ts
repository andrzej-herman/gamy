export interface Track {
  name: string;
  path: string;
}

export interface Exercise {
  name: string;
  code: string;
  tracks: Array<Track>;
  numberOfTracks: string;
}

export interface Record {
  name: string;
  code: string;
  exercises: Array<Exercise>;
}

export const createP1 = (): Record => {
  let result: Record = { name: "Płyta nr 1", code: "P1", exercises: [] };
  for (let idx = 1; idx <= 35; idx++) {
    if (idx === 2) continue;
    if (idx === 3) continue;
    const execode = idx < 10 ? `C0${idx}` : `C${idx}`;
    let exe: Exercise = {
      name: `Folder nr ${idx}`,
      code: execode,
      tracks: [],
      numberOfTracks: "",
    };

    for (let ydx = 1; ydx <= 24; ydx++) {
      if (idx === 1 && ydx > 1) continue;
      if (idx > 29 && ydx > 12) continue;
      const trackname = ydx < 10 ? `0${ydx}.mp3` : `${ydx}.mp3`;
      let track: Track = {
        name: `Ćw. ${ydx}`,
        path: `https://gamyfiles.blob.core.windows.net/p-01/${result.code}_${exe.code}_${trackname}`,
      };
      exe.tracks.push(track);
    }
    exe.numberOfTracks = exe.tracks.length.toString();
    result.exercises.push(exe);
  }
  return result;
};

export const createP2 = (): Record => {
  let result: Record = { name: "Płyta nr 2", code: "P2", exercises: [] };
  for (let idx = 1; idx <= 26; idx++) {
    const execode = idx < 10 ? `C0${idx}` : `C${idx}`;
    let exe: Exercise = {
      name: `Folder nr ${idx}`,
      code: execode,
      tracks: [],
      numberOfTracks: "",
    };

    for (let ydx = 1; ydx <= 56; ydx++) {
      if (idx === 1 && ydx > 1) continue;
      if (idx > 14 && ydx > 6) continue;
      const trackname = ydx < 10 ? `0${ydx}.mp3` : `${ydx}.mp3`;
      let track: Track = {
        name: `Ćw. ${ydx}`,
        path: `https://gamyfiles.blob.core.windows.net/p-02/${result.code}_${exe.code}_${trackname}`,
      };
      exe.tracks.push(track);
    }
    exe.numberOfTracks = exe.tracks.length.toString();
    result.exercises.push(exe);
  }
  return result;
};
