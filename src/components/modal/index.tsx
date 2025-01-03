import { Close } from "assets/icons";
import * as S from "./style";
import Button from "components/button";
export default function Modal({
    onClose,
    newPlaylist,
    setNewPlaylist,
    handleSubmit,
    disabled
}: {
    onClose: () => void;
    newPlaylist: string;
    setNewPlaylist: (value: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
    disabled?: boolean;
}) {
    return (
        <S.ContainerModal>
            <S.ExternalModal>
                <S.Modal>
                    <S.Header>
                        <S.ButtonClose onClick={onClose}>
                            <Close />
                        </S.ButtonClose>
                    </S.Header>
                    <S.Content onSubmit={handleSubmit}>
                        <S.Label>Dê um nome a sua playlist</S.Label>
                        <S.ContentInput>
                            <S.Input
                                required
                                name="newPlaylist"
                                placeholder="Nome da playlist"
                                value={newPlaylist}
                                onChange={(e) => setNewPlaylist(e.target.value)}
                            />
                        </S.ContentInput>
                        <Button
                            text="Criar"
                            type="submit"
                            disabled={disabled}
                        />
                    </S.Content>
                </S.Modal>
            </S.ExternalModal>
        </S.ContainerModal>
    );
}
