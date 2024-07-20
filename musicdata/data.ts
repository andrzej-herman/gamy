export interface Exercise {
  name: string;
  path: string;
  description: string;
  code: string;
}

export interface Folder {
  name: string;
  exercises: Array<Exercise>;
  numberOfTracks: string;
  code: string;
}

export interface Record {
  title: string;
  subtitle: string;
  placeholder: string;
  folders: Array<Folder>;
  name: string;
  desc: string;
}

export interface Book {
  title: string;
  list: Array<string>;
  order: Array<string>;
  records: Array<Record>;
}

export const createBookOne = (): Book => {
  let lt: string[] = [];
  lt.push("Folder nr 1 (C-dur)");
  lt.push("Folder nr 2 (B-dur)");
  lt.push("Folder nr 3 (As-dur)");
  lt.push("Folder nr 4 (G-dur)");
  lt.push("Folder nr 5 (A-dur)");
  lt.push("Folder nr 6 (H-dur/Ces-dur)");
  lt.push("Folder nr 7 (D-dur)");
  lt.push("Folder nr 8 (E-dur)");
  lt.push("Folder nr 9 (Fis-dur/Ges-dur)");
  lt.push("Folder nr 10 (F-dur)");
  lt.push("Folder nr 11 (Es-dur)");
  lt.push("Folder nr 12 (Des-dur/Cis-dur)");
  let ord: string[] = [];
  ord.push("es");
  ord.push("cis");
  ord.push("h");
  ord.push("b");
  ord.push("c");
  ord.push("d");
  ord.push("f");
  ord.push("g");
  ord.push("a");
  ord.push("as");
  ord.push("fis");
  ord.push("e");

  let records: Record[] = [];
  for (let rdx = 1; rdx <= 2; rdx++) {
    let record: Record = {
      title:
        rdx === 1
          ? "Pliki dźwiękowe do gam durowych"
          : "Pliki dźwiękowe do gam durowych chromatycznych",
      subtitle: rdx === 1 ? "Płyta nr 1" : "Płyta nr 2",
      placeholder: `Wybierz folder z płyty ${rdx === 1 ? "pierwszej" : "drugiej"}`,
      folders: [],
      name: rdx === 1 ? "P1" : "P2",
      desc: rdx === 1 ? "pierwszej" : "drugiej",
    };

    for (let fdx = 1; fdx <= 12; fdx++) {
      const folderCode = fdx < 10 ? `C0${fdx}` : `C${fdx}`;
      let folder: Folder = {
        name: lt[fdx - 1],
        numberOfTracks:
          rdx === 1 ? "ilość podkładów: 52" : "ilość podkładów: 6",
        exercises: [],
        code: folderCode,
      };

      const px = rdx === 1 ? 56 : 6;
      for (let pdx = 1; pdx <= px; pdx++) {
        if (rdx === 1 && pdx === 3) continue;
        if (rdx === 1 && pdx === 4) continue;
        if (rdx === 1 && pdx === 5) continue;
        if (rdx === 1 && pdx === 6) continue;

        const num = pdx < 10 ? `0${pdx}.mp3` : `${pdx}.mp3`;
        let exe = {
          name: `Podkład nr ${pdx}`,
          description: `Odtwarzam podkład nr ${pdx} z folderu nr ${fdx} z płyty ${rdx === 1 ? "pierwszej" : "drugiej"}`,
          path:
            rdx === 1
              ? `https://gamyfiles.blob.core.windows.net/dur-${ord[fdx - 1]}-dur/${ord[fdx - 1]}_dur_${num}`
              : `https://gamyfiles.blob.core.windows.net/chrom-${ord[fdx - 1]}-dur/${ord[fdx - 1]}_dur_c_${num}`,
          code: `${record.name}${folder.code.replace("C", "F")}C${pdx}`,
        };
        folder.exercises.push(exe);
      }
      record.folders.push(folder);
    }
    records.push(record);
  }

  return {
    title:
      "Gamy i pasaże kornet, alt, waltornia, tuba w kluczu wiolinowym stroju Es",
    list: lt,
    order: ord,
    records: records,
  };
};

export const createBookTwo = (): Book => {
  let lt: string[] = [];
  lt.push("Folder nr 1 (C-dur)");
  lt.push("Folder nr 2 (B-dur)");
  lt.push("Folder nr 3 (As-dur)");
  lt.push("Folder nr 4 (G-dur)");
  lt.push("Folder nr 5 (A-dur)");
  lt.push("Folder nr 6 (H-dur/Ces-dur)");
  lt.push("Folder nr 7 (D-dur)");
  lt.push("Folder nr 8 (E-dur)");
  lt.push("Folder nr 9 (Fis-dur/Ges-dur)");
  lt.push("Folder nr 10 (F-dur)");
  lt.push("Folder nr 11 (Es-dur)");
  lt.push("Folder nr 12 (Des-dur/Cis-dur)");
  let ord: string[] = [];
  ord.push("f");
  ord.push("es");
  ord.push("cis");
  ord.push("c");
  ord.push("d");
  ord.push("e");
  ord.push("g");
  ord.push("a");
  ord.push("h");
  ord.push("b");
  ord.push("as");
  ord.push("fis");
  let records: Record[] = [];
  for (let rdx = 1; rdx <= 2; rdx++) {
    let record: Record = {
      title:
        rdx === 1
          ? "Pliki dźwiękowe do gam durowych"
          : "Pliki dźwiękowe do gam durowych chromatycznych",
      subtitle: rdx === 1 ? "Płyta nr 1" : "Płyta nr 2",
      placeholder: `Wybierz folder z płyty ${rdx === 1 ? "pierwszej" : "drugiej"}`,
      folders: [],
      name: rdx === 1 ? "P1" : "P2",
      desc: rdx === 1 ? "pierwszej" : "drugiej",
    };

    for (let fdx = 1; fdx <= 12; fdx++) {
      const folderCode = fdx < 10 ? `C0${fdx}` : `C${fdx}`;
      let folder: Folder = {
        name: lt[fdx - 1],
        numberOfTracks:
          rdx === 1 ? "ilość podkładów: 52" : "ilość podkładów: 6",
        exercises: [],
        code: folderCode,
      };

      const px = rdx === 1 ? 56 : 6;
      for (let pdx = 1; pdx <= px; pdx++) {
        if (rdx === 1 && pdx === 3) continue;
        if (rdx === 1 && pdx === 4) continue;
        if (rdx === 1 && pdx === 5) continue;
        if (rdx === 1 && pdx === 6) continue;

        const num = pdx < 10 ? `0${pdx}.mp3` : `${pdx}.mp3`;
        let exe = {
          name: `Podkład nr ${pdx}`,
          description: `Odtwarzam podkład nr ${pdx} z folderu nr ${fdx} z płyty ${rdx === 1 ? "pierwszej" : "drugiej"}`,
          path:
            rdx === 1
              ? `https://gamyfiles.blob.core.windows.net/dur-${ord[fdx - 1]}-dur/${ord[fdx - 1]}_dur_${num}`
              : `https://gamyfiles.blob.core.windows.net/chrom-${ord[fdx - 1]}-dur/${ord[fdx - 1]}_dur_c_${num}`,
          code: `${record.name}${folder.code.replace("C", "F")}C${pdx}`,
        };
        folder.exercises.push(exe);
      }
      record.folders.push(folder);
    }
    records.push(record);
  }

  return {
    title: "Gamy i pasaże na waltornię w stroju F",
    list: lt,
    order: ord,
    records: records,
  };
};

export const createBookThree = (): Book => {
  let lt: string[] = [];
  lt.push("Folder nr 1 (C-dur)");
  lt.push("Folder nr 2 (B-dur)");
  lt.push("Folder nr 3 (As-dur)");
  lt.push("Folder nr 4 (G-dur)");
  lt.push("Folder nr 5 (A-dur)");
  lt.push("Folder nr 6 (H-dur/Ces-dur)");
  lt.push("Folder nr 7 (D-dur)");
  lt.push("Folder nr 8 (E-dur)");
  lt.push("Folder nr 9 (Fis-dur/Ges-dur)");
  lt.push("Folder nr 10 (F-dur)");
  lt.push("Folder nr 11 (Es-dur)");
  lt.push("Folder nr 12 (Des-dur/Cis-dur)");
  let ord: string[] = [];
  ord.push("b");
  ord.push("as");
  ord.push("fis");
  ord.push("f");
  ord.push("g");
  ord.push("a");
  ord.push("c");
  ord.push("d");
  ord.push("e");
  ord.push("es");
  ord.push("cis");
  ord.push("h");
  let records: Record[] = [];
  for (let rdx = 1; rdx <= 2; rdx++) {
    let record: Record = {
      title:
        rdx === 1
          ? "Pliki dźwiękowe do gam durowych"
          : "Pliki dźwiękowe do gam durowych chromatycznych",
      subtitle: rdx === 1 ? "Płyta nr 1" : "Płyta nr 2",
      placeholder: `Wybierz folder z płyty ${rdx === 1 ? "pierwszej" : "drugiej"}`,
      folders: [],
      name: rdx === 1 ? "P1" : "P2",
      desc: rdx === 1 ? "pierwszej" : "drugiej",
    };

    for (let fdx = 1; fdx <= 12; fdx++) {
      const folderCode = fdx < 10 ? `C0${fdx}` : `C${fdx}`;
      let folder: Folder = {
        name: lt[fdx - 1],
        numberOfTracks:
          rdx === 1 ? "ilość podkładów: 52" : "ilość podkładów: 6",
        exercises: [],
        code: folderCode,
      };

      const px = rdx === 1 ? 56 : 6;
      for (let pdx = 1; pdx <= px; pdx++) {
        if (rdx === 1 && pdx === 3) continue;
        if (rdx === 1 && pdx === 4) continue;
        if (rdx === 1 && pdx === 5) continue;
        if (rdx === 1 && pdx === 6) continue;

        const num = pdx < 10 ? `0${pdx}.mp3` : `${pdx}.mp3`;
        let exe = {
          name: `Podkład nr ${pdx}`,
          description: `Odtwarzam podkład nr ${pdx} z folderu nr ${fdx} z płyty ${rdx === 1 ? "pierwszej" : "drugiej"}`,
          path:
            rdx === 1
              ? `https://gamyfiles.blob.core.windows.net/dur-${ord[fdx - 1]}-dur/${ord[fdx - 1]}_dur_${num}`
              : `https://gamyfiles.blob.core.windows.net/chrom-${ord[fdx - 1]}-dur/${ord[fdx - 1]}_dur_c_${num}`,
          code: `${record.name}${folder.code.replace("C", "F")}C${pdx}`,
        };
        folder.exercises.push(exe);
      }
      record.folders.push(folder);
    }
    records.push(record);
  }

  return {
    title:
      "Gamy i pasaże na trąbkę, kornet, eufonium, puzon, tuba w kluczu wiolinowym w stroju B",
    list: lt,
    order: ord,
    records: records,
  };
};
