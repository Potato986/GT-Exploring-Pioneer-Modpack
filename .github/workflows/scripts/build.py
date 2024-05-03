import json
import os
import shutil
from pathlib import Path

import toml

mod_path = Path() / 'mods'
index_path = mod_path / '.index'


def main():
    build_number = os.environ.get('BUILD_NUM', None)
    with open('modpack_info.json', encoding='utf-8') as f:
        pack_info = json.load(f)
    manifest = {
        'manifestType': 'minecraftModpack',
        'manifestVersion': 1,
        'minecraft': {
            "version": "1.20.1",
            'modLoaders': [
                {
                    'id': 'neoforge-47.1.81',
                    'primary': True
                }
            ]
        },
        'name': pack_info['name'],
        'author': pack_info['author'],
        'version': pack_info['version'] if build_number is None else pack_info['version'] + f'+build.{build_number}',
        'files': [],
        'overrides': 'overrides',
    }

    mod_list = os.listdir(mod_path)

    files = list(filter(lambda x: x.endswith('.toml'), os.listdir(index_path)))
    files = [index_path / file for file in files]
    for file in files:
        info = toml.load(file)
        if 'curseforge' in info['update']:
            manifest['files'].append({
                'fileID': info['update']['curseforge']['file-id'],
                'projectID': info['update']['curseforge']['project-id'],
                'required': True
            })

    if os.path.exists('build'):
        shutil.rmtree('build')

    os.mkdir('build')
    os.mkdir('build/overrides')

    with open('build/manifest.json', 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=4, ensure_ascii=False)

    shutil.copytree('config', 'build/overrides/config')
    shutil.copytree('kubejs', 'build/overrides/kubejs')

    if len(mod_list) != 0:
        os.mkdir('build/overrides/mods')

    for mod in mod_list:
        if not mod.endswith('.jar'):
            continue
        shutil.copy(mod_path / mod, f'build/overrides/mods/{mod}')

    # with ZipFile(f'{manifest["name"]}-{manifest["version"]}.zip', 'w') as z:
    #     # z.mkdir('overrides')
    #     for mod in mod_list:
    #         if not mod.endswith('.jar'):
    #             continue
    #         z.write(mod_path / mod, arcname=f'overrides/mods/{mod}')
    #         print('Added: ' + str(mod_path / mod))
    #     z.write('manifest.json')
    #     print('Added: manifest.json')
    #
    #     for dir_path, dir_names, filenames in os.walk('config'):
    #         fpath = dir_path or ''
    #         for filename in filenames:
    #             z.write(f'{fpath}\\{filename}', arcname=f'overrides\\{fpath}\\{filename}')
    #             print(f'Added: {fpath}\\{filename}')
    #
    #     for dir_path, dir_names, filenames in os.walk('kubejs'):
    #         fpath = dir_path or ''
    #         if 'probe' in fpath:
    #             continue
    #         for filename in filenames:
    #             z.write(f'{fpath}\\{filename}', arcname=f'overrides\\{fpath}\\{filename}')
    #             print(f'Added: {fpath}\\{filename}')


if __name__ == '__main__':
    main()
