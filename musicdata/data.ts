export interface Exercise {
  name: string;
  path: string;
  code: string;
  description: string;
}

export interface Folder {
  name: string;
  code: string;
  exercises: Array<Exercise>;
  numberOfTracks: string;
}

export interface Record {
  name: string;
  code: string;
  placeholder: string;
  desc: string;
  folders: Array<Folder>;
}

export interface recordData {
  records: Array<Record>;
}

export const createData = (): recordData => {
  let data: recordData = { records: [] };
  for (let rdx = 1; rdx <= 2; rdx++) {
    const placeholder = `Wybierz folder z płyty ${rdx === 1 ? "pierwszej" : "drugiej"}`;
    const desc = rdx === 1 ? "pierwszej" : "drugiej";
    let record: Record = {
      name: `P${rdx}`,
      code: `p-0${rdx}`,
      placeholder,
      desc,
      folders: [],
    };
    let px = rdx === 1 ? 35 : 26;
    let py = rdx === 1 ? 24 : 56;
    for (let idx = 1; idx <= px; idx++) {
      if (rdx === 1) {
        if (idx === 2) continue;
        if (idx === 3) continue;
      }
      const folderCode = idx < 10 ? `C0${idx}` : `C${idx}`;
      let folder: Folder = {
        name: `Folder nr ${idx}`,
        code: folderCode,
        exercises: [],
        numberOfTracks: "",
      };
      for (let ydx = 1; ydx <= py; ydx++) {
        if (idx === 1 && ydx > 1) continue;
        if (rdx === 1) {
          if (idx > 29 && ydx > 12) continue;
        } else {
          if (idx > 14 && ydx > 6) continue;
        }
        const exerciseName = ydx < 10 ? `0${ydx}.mp3` : `${ydx}.mp3`;
        const rtext = `Odtwarzam ćwiczenie nr ${ydx} z folderu nr ${idx} z płyty ${rdx === 1 ? "pierwszej" : "drugiej"}`;
        let exercise: Exercise = {
          name: `Ćw. ${ydx}`,
          path: `https://gamyfiles.blob.core.windows.net/${record.code}/${record.name}_${folder.code}_${exerciseName}`,
          code: `${record.name}${folder.code.replace("C", "F")}C${ydx}`,
          description: rtext,
        };
        folder.exercises.push(exercise);
      }
      folder.numberOfTracks = `dostępne ćwiczenia: ${folder.exercises.length.toString()}`;
      record.folders.push(folder);
    }
    data.records.push(record);
  }
  return data;
};
