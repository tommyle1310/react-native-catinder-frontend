import { FontAwesome } from '@expo/vector-icons';


const useDisplayStars = ({ number, color, size }) => {
    switch (true) {
        case number < 1:
            return <><FontAwesome name="star-half-full" size={size} color={color} />
                <FontAwesome name="star-o" size={size} color={color} />
                <FontAwesome name="star-o" size={size} color={color} />
                <FontAwesome name="star-o" size={size} color={color} />
                <FontAwesome name="star-o" size={size} color={color} />
            </>
        case number < 2:
            return (
                <>
                    <FontAwesome name="star" size={size} color={color} />
                    <FontAwesome name="star-half-full" size={size} color={color} />
                    <FontAwesome name="star-o" size={size} color={color} />
                    <FontAwesome name="star-o" size={size} color={color} />
                    <FontAwesome name="star-o" size={size} color={color} />

                </>
            );
        case number < 3:
            return (
                <>
                    <FontAwesome name="star" size={size} color={color} />
                    <FontAwesome name="star" size={size} color={color} />
                    <FontAwesome name="star-half-full" size={size} color={color} />
                    <FontAwesome name="star-o" size={size} color={color} />
                    <FontAwesome name="star-o" size={size} color={color} />

                </>
            );
        case number < 4:
            return (
                <>
                    <FontAwesome name="star" size={size} color={color} />
                    <FontAwesome name="star" size={size} color={color} />
                    <FontAwesome name="star" size={size} color={color} />
                    <FontAwesome name="star-half-full" size={size} color={color} />
                    <FontAwesome name="star-o" size={size} color={color} />
                </>
            );
        case number < 5:
            return (
                <>
                    <FontAwesome name="star" size={size} color={color} />
                    <FontAwesome name="star" size={size} color={color} />
                    <FontAwesome name="star" size={size} color={color} />
                    <FontAwesome name="star" size={size} color={color} />
                    <FontAwesome name="star-half-full" size={size} color={color} />
                </>
            );
        default:
            return <FontAwesome name="star-o" size={size} color={color} />;
    }
};

export default useDisplayStars